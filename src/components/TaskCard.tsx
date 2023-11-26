import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { Status } from "../types";
import Chip from "@mui/material/Chip/Chip";
import { deleteTask } from '../services/deleteTask';
import { useGlobalChange } from '../store/useTask';
import { editTask } from '../services/editTask';
import { useState } from 'react';

interface Props {
    createdAt: string,
    dateEnd: string,
    dateStart: string,
    description: string,
    id: string,
    modifiedAt: string,
    status: string,
    title: string,
    user: string,
}

const TaskCard = ({ id, title, description, status }: Props) => {

    const globalChange = useGlobalChange(state => state.somethingChanged)

    const [newStatus, setNewStatus] = useState('')

    const toDelete = async (id: string) => {
        await deleteTask({ id });
        globalChange()
    }

    const toEdit = async (id: string, status: string) => {
        await editTask({ id, status })
        globalChange()
    }

    return (
        <div className='my-5'>
            <Card >
                <CardContent>
                    <div className="flex flex-row min-w-[15rem] justify-between items-center my-3">
                        <Typography gutterBottom variant="h5" component="div" >
                            {title}
                            <div>
                                {status === Status.COMPLETED && <Chip color="success" label={status} size="small" variant="outlined" />}
                                {status === Status.IN_PROGRESS && <Chip color="info" label={status} size="small" variant="outlined" />}
                                {status === Status.PENDING && <Chip color="warning" label={status} size="small" variant="outlined" />}
                            </div>
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Status</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Status"
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                            >
                                <MenuItem value={Status.IN_PROGRESS}>In progress</MenuItem>
                                <MenuItem value={Status.COMPLETED}>Completed</MenuItem>
                                <MenuItem value={Status.PENDING}>Pending</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Typography variant="body2" color="text.secondary" sx={{ wordWrap: 'break-word' }} >
                        {description}
                    </Typography>
                </CardContent>
                <div className="h-full flex flex-row justify-end">
                    <CardActions>
                        <Button color="warning" size="small" onClick={() => toEdit(id, newStatus)}>Edit</Button>
                        <Button color="error" size="small" onClick={() => toDelete(id)}>Delete</Button>
                    </CardActions>
                </div>
            </Card>
        </div>
    )
}

export default TaskCard