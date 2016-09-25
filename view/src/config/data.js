const data = [
	{
		"date": "2016-09-24",
		"doc": 0,
		"movements" : [
			{
				"id": 1,
				"description": "This is a description from elasticsearch",
				"title": "Free cookies for everyone"
			},
			{
				"id": 3,
				"description": "This is a description from elasticsearch",
				"title": "Free cookies for everyone"
			},
		],
		"attendance": [
			{"name": "John", "position": "Council Member", "present": true},
			{"name": "Jimmy", "position": "Different Member", "present": true},
			{"name": "Sarah", "position": "Council Member", "present": false},
			{"name": "Rachel", "position": "Council Member", "present": true}
		],
		"place": "City hall",
		"organization": {"name": "City Council"}
	},
	{
		"date": "2016-09-24",
		"doc": 0,
		"movements" : [
			{
				"id": 2,
				"description": "This is a description from elasticsearch",
				"title": "Free cookies for everyone"
			},
			{
				"id": 4,
				"description": "This is a description from elasticsearch",
				"title": "Free cookies for everyone"
			},
		],
		"attendance": [
			{"name": "John", "position": "Council Member", "present": true},
			{"name": "Jimmy", "position": "Different Member", "present": true},
			{"name": "Sarah", "position": "Council Member", "present": false},
			{"name": "Rachel", "position": "Council Member", "present": true}
		],
		"place": "City hall",
		"organization": {"name": "City Council"}
	}
]


export default data;
// {"position": "Council Member", "name": "John", "votes": [{"movement": {"id": 1, "title": "Free cookies for everyone"}, "yay": true}]}
