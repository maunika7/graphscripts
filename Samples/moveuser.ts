//macros will include the library that allows graph calls to be made easily
import { Library } from './library';

//request will include @odata information needed for addMember function, memberID, fromGroupID, and toGroupID
async function moveUser(context, request)
{
    if(context) context.log("Starting function");

    let removed = await Library.Groups.Delete.removeMember(request.memberID, request.fromGroupID);
    let added = await Library.Groups.Post.addMember(request.memberID, request.toGroupID);

    let response = {
        status: 200,
        body: {
           removed
        }
    };
    return response;


}