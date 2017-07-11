import { GraphClient } from '../authHelpers';

//Library Functions


export var Library = {
Users: {
    Get: {
        profile:
            async function (userID) {
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
            async function(userID) {
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
            async function(userID) {
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
            async function(userID) {
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
            async function(userID) {
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
            async function(userID) {
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
            async function (userID) {
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
                async function(groupID) {
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
},

Groups: {
    Post: {
        addMember:
            async function(memberID, groupID) {
                const client = await GraphClient();
                var memberReq = await Library.Users.Get.profile(memberID);

                return client
                    .api("/groups/" + memberID + "/members/$ref")
                    .post({"@odata.id": memberID}, (err, res) => {console.log(res)});
            }
    },

    Delete: {
        removeMember:
            async function(memberID, groupID) {
                const client = await GraphClient();

                return client
                .api("/" + groupID + "/" + memberID + "/members/" + memberID + "/$ref")
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