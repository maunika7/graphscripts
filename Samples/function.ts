import { moveUser } from './moveUser';

export async function main (context, request) {
    if (context) context.log("Starting Azure function!");

    let response = await moveUser(request.body.memberID, request.body.fromGroupID, request.body.toGroupID);

    return response;
};