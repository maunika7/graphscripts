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
                        .api("/users/" + userID)
                        .get()
                        .then((res) => {
                        return res;
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
                        return res;
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
                        return res;
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
                        return res;
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
                        return res;
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
                        return res;
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
                            return res;
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
                            return res;
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
                        .post({ userData })
                        .then((res) => {
                        return res;
                    });
                });
            },
            sendMail: function (memberID, message) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api("users/" + memberID + "/sendmail")
                        .post({ "message": message })
                        .then((res) => {
                        return res;
                    });
                });
            },
            OneNote: {
                createNotebook: function (memberID, notebookName) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const client = yield authHelpers_1.GraphClient();
                        return client
                            .api("users/" + memberID + "/onenote/notebooks")
                            .post({ "display name": notebookName })
                            .then((res) => {
                            return res;
                        });
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
                        .api("/groups/" + groupID + "/members/$ref")
                        .post({ "@odata.id": "https://graph.microsoft.com/beta/directoryObjects/" + memberID })
                        .then((res) => {
                        return res;
                    });
                });
            }
        },
        Delete: {
            removeMember: function (memberID, groupID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const client = yield authHelpers_1.GraphClient();
                    return client
                        .api("/groups/" + groupID + "/members/" + memberID + "/$ref")
                        .del()
                        .then((res) => {
                        return res;
                    });
                });
            }
        }
    }
};
//# sourceMappingURL=library.js.map