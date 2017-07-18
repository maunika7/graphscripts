"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//Library Functions
const authHelpers_1 = require("../authHelpers");
exports.Library = {
    Users: {
        Get: {
            profile: function (userID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api(userID)
                        .get()
                        .then((res) => {
                        let profile = res.value;
                        return profile;
                    });
                });
            },
            events: function (userID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api(userID + "/events")
                        .get()
                        .then((res) => {
                        let events = res.value;
                        return events;
                    });
                });
            },
            photo: function (userID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api(userID + "/photo/$value")
                        .get()
                        .then((res) => {
                        let photo = res.value;
                        return photo;
                    });
                });
            },
            mail: function (userID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api(userID + "/messages")
                        .get()
                        .then((res) => {
                        let messages = res.value;
                        return messages;
                    });
                });
            },
            driveItems: function (userID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api(userID + "/drive/root/children")
                        .get()
                        .then((res) => {
                        let driveItems = res.value;
                        return driveItems;
                    });
                });
            },
            trendingItems: function (userID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api(userID + "/insights/trending")
                        .get()
                        .then((res) => {
                        let trendingItems = res.value;
                        return trendingItems;
                    });
                });
            },
            Groups: {
                memberOf: function (userID) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const client = yield authHelpers_1.GraphClient();
                        console.log("in memberOf\n");
                        return client
                            .api(userID + "/memberOf")
                            .get()
                            .then((res) => {
                            let groups = res.value;
                            return groups;
                        });
                    });
                },
                members: function (groupID) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const client = yield authHelpers_1.GraphClient();
                        return client
                            .api("/groups/" + groupID + "/members")
                            .get()
                            .then((res) => {
                            let members = res.value;
                            return members;
                        });
                    });
                }
            }
        },
        Post: {
            createUser: function (userData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api("users")
                        .post({ userData }, (err, res) => { console.log(res); });
                });
            },
            sendMail: function (memberID, message) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api("users/" + memberID + "/sendmail")
                        .post({ "message": message }, (err, res) => { console.log(res); });
                });
            },
            OneNote: {
                createNotebook: function (memberID, notebookName) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const client = yield authHelpers_1.GraphClient();
                        return client
                            .api("users/" + memberID + "/onenote/notebooks")
                            .post({ "display name": notebookName }, (err, res) => { console.log(res); });
                    });
                }
            }
        }
    },
    Groups: {
        Post: {
            addMember: function (memberID, groupID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    var memberReq = yield exports.Library.Users.Get.profile(memberID);
                    return client
                        .api("/groups/" + memberID + "/members/$ref")
                        .post({ "@odata.id": memberID }, (err, res) => { console.log(res); });
                });
            }
        },
        Delete: {
            removeMember: function (memberID, groupID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api("/groups/" + groupID + "/members/" + memberID + "/$ref")
                        .del((err, res) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log(res);
                    });
                });
            }
        }
    }
};
//# sourceMappingURL=library.js.map