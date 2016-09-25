const data = [
	{
		"date": "2015-09-24",
		"doc": 0,
		"movements" : [
			{
				"id": 1,
				"description": "This is a description from elasticsearch  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"title": "Disseminating the Mail"
			},
			{
				"id": 3,
				"description": "This is a description from elasticsearch",
				"title": "Basketball Courts"
			},
		],
		"attendance": [
			{"name": "John", "position": "Council Member", "present": true},
			{"name": "Jimmy", "position": "Different Member", "present": true},
			{"name": "Sarah", "position": "Council Member", "present": true},
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
				"title": "Courting international Billionaires"
			},
			{
				"id": 4,
				"description": "This is a description from elasticsearch",
				"title": "Free cookies for everyone"
			},
		],
		"attendance": [
			{"name": "John", "position": "Council Member", "present": false},
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
