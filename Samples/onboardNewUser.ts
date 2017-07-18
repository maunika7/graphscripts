//scripts will include the library that allows graph calls to be made easily
import { Library } from './library';

//request will include information needed to onboard a new user
export async function onboardNewUser(userData, groupID, notebookName, message)
{
    let createdUser = await Library.Users.Post.createUser(userData);
    let addedToGroup = await Library.Groups.Post.addMember(createdUser.id, groupID);
    let createdOneNote = await Library.Users.Post.OneNote.createNotebook(createdUser.id, notebookName);
    let sendEmail = await Library.Users.Post.sendMail(createdUser.id, message);

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

}