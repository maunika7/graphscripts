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
const moveUser_1 = require("./moveUser");
function main(context, request) {
    return __awaiter(this, void 0, void 0, function* () {
        if (context)
            context.log("Starting Azure function!");
        let response = yield moveUser_1.moveUser(request.body.memberID, request.body.fromGroupID, request.body.toGroupID);
        return response;
    });
}
exports.main = main;
;
//# sourceMappingURL=function.js.map