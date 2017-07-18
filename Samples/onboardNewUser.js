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
//scripts will include the library that allows graph calls to be made easily
const library_1 = require("./library");
//request will include information needed to onboard a new user
function onboardNewUser(userData, groupID, notebookName, message) {
    return __awaiter(this, void 0, void 0, function* () {
        let createdUser = yield library_1.Library.Users.Post.createUser(userData);
        let addedToGroup = yield library_1.Library.Groups.Post.addMember(createdUser.id, groupID);
        let createdOneNote = yield library_1.Library.Users.Post.OneNote.createNotebook(createdUser.id, notebookName);
        let sendEmail = yield library_1.Library.Users.Post.sendMail(createdUser.id, message);
        let response = {
            status: 200,
            body: {
                "createdUser": createdUser,
                "addedToGroup": addedToGroup,
                "createdOneNote": createdOneNote,
                "sendEmail": sendEmail
            }
        };
        return response;
    });
}
exports.onboardNewUser = onboardNewUser;
//# sourceMappingURL=onboardNewUser.js.map