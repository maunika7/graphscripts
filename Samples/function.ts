//this file runs whichever script you would like taking in a request with the appropriate parameters
import { moveUser } from './moveUser';
import { onboardNewUser } from './onboardNewUser'

export async function main (context, request) {
    if (context) context.log("Starting Azure function!");

    //moves one user from one group to another
    let response = await moveUser(request.body.memberID, request.body.fromGroupID, request.body.toGroupID);
    
    //onboards a new user by creating the user, adding them to a group, creating a onenote for them, and sending them a welcome email
    //let response = await onboardNewUser(request.body.userData, request.body.groupID, request.body.notebookName, request.body.message);

    return response;
};