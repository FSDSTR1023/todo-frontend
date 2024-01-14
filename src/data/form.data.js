const status = {
	PENDING: 'PENDING',
	IN_PROGRESS: 'IN PROGRESS',
	COMPLETED: 'COMPLETED'
}

const formConfig = [
	{
		name: 'title',
		label: 'Title',
		placeholder: 'Buy cookies',
		type: 'text',
	},
	{
		name: 'description',
		label: 'Description',
		placeholder: 'Go to the shop for some delicious cookies',
		type: 'textarea',
	},
	{
		name: 'status',
		label: 'Status',
		type: 'select',
		options: [
			{
				value: '',
				text: '--- Select an option ---'
			},
			{
				value: status.PENDING,
				text: 'PENDING'
			},
			{
				value: status.IN_PROGRESS,
				text: 'IN PROGRESS'
			},
			{
				value: status.COMPLETED,
				text: 'COMPLETED'
			},
		]
	},
	{
		name: 'datestart',
		label: 'Start date',
		type: 'date',
	},
	{
		name: 'dateend',
		label: 'Start date',
		type: 'date',
	},
]

export {
    status,
    formConfig as default,
}