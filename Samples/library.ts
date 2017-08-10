//Library Functions
import { GraphClient } from '../authHelpers';

export var Library = {
Users: {
    Get: {
        profile:
            async function (userID: string) {
                const client = await GraphClient();

                return client
                    .api("/users/" + userID)
                    .get()
                    .then((res) => {
                        return res;
                    });
        },

        events: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/events")
                    .get()
                    .then((res) => {
                        return res;
                    });
	    },

        photo: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/photo/$value")
                    .get()
                    .then((res) => {
                        return res;
                    });
	    },

        mail: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/messages")
                    .get()
                    .then((res) => {
                        return res;
                    });
	    },

        driveItems: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/drive/root/children")
                    .get()
                    .then((res) => {
                        return res;
                    });
	    },

        trendingItems: 
            async function(userID: string) {
                const client = await GraphClient();

                return client
                    .api(userID + "/insights/trending")
                    .get()
                    .then((res) => {
                        return res;
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
                        return res;
                    });
        },
            members:
                async function(groupID: string) {
                    const client = await GraphClient();

                    return client
                        .api("/groups/"+ groupID + "/members")
                        .get()
                        .then((res) => {
                            return res;
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
                    .post({userData})
                    .then((res) => {
                            return res;
                    });
            },
        sendMail:
            async function(memberID: string, message: string) {
                const client = await GraphClient();

                return client
                    .api("users/" + memberID + "/sendmail")
                    .post({"message": message})
                    .then((res) => {
                            return res;
                    });

            },

        OneNote: {
            createNotebook:
                async function(memberID: string, notebookName: string) {
                    const client = await GraphClient();

                    return client
                        .api("users/" + memberID + "/onenote/notebooks")
                        .post({"display name": notebookName})
                        .then((res) => {
                            return res;
                        });
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
                    .api("/groups/" + groupID + "/members/$ref")
                    .post({"@odata.id": "https://graph.microsoft.com/beta/directoryObjects/" + memberID})
                    .then((res) => {
                        return res;
                    });
            }
    },

    Delete: {
        removeMember:
            async function(memberID: string, groupID: string) {
                const client = await GraphClient();

                return client
                    .api("/groups/" + groupID + "/members/" + memberID + "/$ref")
                    .del()
                    .then((res) => {
                        return res;
                    });
            }

    }
}

}