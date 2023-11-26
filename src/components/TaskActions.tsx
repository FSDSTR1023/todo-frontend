import Box from "@mui/material/Box/Box"
import dayjs from 'dayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import TextField from "@mui/material/TextField/TextField"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { createTask } from "../services/createTask";
import Checkbox from '@mui/material/Checkbox';
import { useGlobalChange } from "../store/useTask";

const TaskActions = () => {

    const [isEmptyTitle, setIsEmptyTitle] = useState(false);
    const [haveStart, setHaveStart] = useState(false);
    const [haveEnd, setHaveEnd] = useState(false);

    const globalChange = useGlobalChange(state => state.somethingChanged)

    const formHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = (((e.target as HTMLFormElement)
            .elements as HTMLFormControlsCollection)
        ['input-title' as unknown as number] as HTMLInputElement);

        const description = (((e.target as HTMLFormElement)
            .elements as HTMLFormControlsCollection)
        ['input-description' as unknown as number] as HTMLInputElement);

        const dateStart = (((e.target as HTMLFormElement)
            .elements as HTMLFormControlsCollection)
        [':r7:' as unknown as number] as HTMLInputElement);

        const dateEnd = (((e.target as HTMLFormElement)
            .elements as HTMLFormControlsCollection)
        [':rd:' as unknown as number] as HTMLInputElement);

        if (!title.value) {
            setIsEmptyTitle(true);
            return;
        } else {
            setIsEmptyTitle(false)
        }

        const data = {
            title: title.value.trim(),
            description: description.value.trim(),
            dateStart: haveStart ? new Date(dateStart.value)?.toISOString() : undefined,
            dateEnd: haveEnd ? new Date(dateEnd.value)?.toISOString() : undefined,
        }

        await createTask(data);
        globalChange();
        // const newTask = await createTask(data);
        // console.log(newTask);

    }
    return (
        <Box
            className="flex flex-col"
            component="form"
            method="POST"
            onSubmit={formHandle}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '15rem' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="input-title"
                color="success"
                label="Title"
                required
                error={isEmptyTitle}
            />
            <TextField
                id="input-description"
                color="success"
                label="Description"
                multiline
                rows={4}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box className='flex flex-col'>
                    <FormControlLabel control={<Checkbox color="success" onChange={(e) => setHaveStart(e.target.checked)} size="small" />} label="Starts at:" />
                    <MobileDateTimePicker defaultValue={dayjs(new Date())} disabled={!haveStart} />
                </Box>
                <Box className='flex flex-col'>
                    <FormControlLabel control={<Checkbox color="success" onChange={(e) => setHaveEnd(e.target.checked)} size="small" />} label="Ends at:" />
                    <MobileDateTimePicker defaultValue={dayjs(new Date())} disabled={!haveEnd} />
                </Box>
            </LocalizationProvider>
            <Button sx={{ m: 1 }} type="submit" color="success" variant="contained">Create</Button>
        </Box>
    )
}

export default TaskActions