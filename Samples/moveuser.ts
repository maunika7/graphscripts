//scripts will include the library that allows graph calls to be made easily
import { Library } from './library';

//request will include @odata information needed for addMember function, memberID, fromGroupID, and toGroupID
export async function moveUser(memberID, toGroupID, fromGroupID)
{
    let removed = await Library.Groups.Delete.removeMember(memberID, fromGroupID);
    let added = await Library.Groups.Post.addMember(memberID, toGroupID);

    let response = {
        status: 200,
        body: {
            "removedMember": removed,
            "addedMember": added
        }
    };
    
    return response;

}