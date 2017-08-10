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
//request will include @odata information needed for addMember function, memberID, fromGroupID, and toGroupID
function moveUser(memberID, fromGroupID, toGroupID) {
    return __awaiter(this, void 0, void 0, function* () {
        let removed = yield library_1.Library.Groups.Delete.removeMember(memberID, fromGroupID);
        let added = yield library_1.Library.Groups.Post.addMember(memberID, toGroupID);
        let response = {
            status: 200,
            body: {
                "removedMember": removed,
                "addedMember": added
            }
        };
        return response;
    });
}
exports.moveUser = moveUser;
//# sourceMappingURL=moveUser.js.map