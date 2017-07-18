//Library Functions
import { GraphClient } from '../authHelpers';

export var Library = {
Users: {
    Get: {
        profile:
            async function (userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID)
                    .get()
                    .then((res) => {
                        let profile = res.value;
                        return profile;
                    });
        },

        events: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/events")
                    .get()
                    .then((res) => {
                        let events = res.value;
                        return events;
                    });
	    },

        photo: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/photo/$value")
                    .get()
                    .then((res) => {
                        let photo = res.value;
                        return photo;
                    });
	    },

        mail: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/messages")
                    .get()
                    .then((res) => {
                        let messages = res.value;
                        return messages;
                    });
	    },

        driveItems: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/drive/root/children")
                    .get()
                    .then((res) => {
                        let driveItems = res.value;
                        return driveItems;
                    });
	    },

        trendingItems: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/insights/trending")
                    .get()
                    .then((res) => {
                        let trendingItems = res.value;
                        return trendingItems;
                    });
	    },

        Groups: {
            memberOf:
            async function (userID: string) {
                const client = await GraphClient();
                console.log("in memberOf\n");

                return client
                    .api(userID + "/memberOf")
                    .get()
                    .then((res) => {
                        let groups = res.value;
                        return groups;
                    });
        },
            members:
                async function(groupID: string) {
                    const client = await GraphClient();

                    return client
                        .api("/groups/"+ groupID + "/members")
                        .get()
                        .then((res) => {
                            let members = res.value;
                            return members;
                        });
                }
        
        }


    },

    Post: {
        createUser:
            async function(userData: string) {
                const client = await GraphClient();

                return client
                    .api("users")
                    .post({userData}, (err, res) => {console.log(res)});
            },
        sendMail:
            async function(memberID: string, message: string) {
                const client = await GraphClient();

                return client
                    .api("users/" + memberID + "/sendmail")
                    .post({"message": message}, (err, res) => {console.log(res)});

            },
        OneNote: {
            createNotebook:
                async function(memberID: string, notebookName: string) {
                    const client = await GraphClient();

                    return client
                        .api("users/" + memberID + "/onenote/notebooks")
                        .post({"display name": notebookName}, (err, res) => {console.log(res)});
                }
        }

    }
},

Groups: {
    Post: {
        addMember:
            async function(memberID: string, groupID: string) {
                const client = await GraphClient();
                var memberReq = await Library.Users.Get.profile(memberID);

                return client
                    .api("/groups/" + memberID + "/members/$ref")
                    .post({"@odata.id": memberID}, (err, res) => {console.log(res)});
            }
    },

    Delete: {
        removeMember:
            async function(memberID: string, groupID: string) {
                const client = await GraphClient();

                return client
                .api("/groups/" + groupID + "/members/" + memberID + "/$ref")
                .del((err, res) => {
                        if (err) {
                            console.log(err)
                            return;
                        }
                        console.log(res)
                    })
            }

    }
}

}