import { moveUser } from './moveUser';

export async function main (context, request) {
    if (context) context.log("Starting Azure function!");

    let response = await moveUser(request.memberID, request.fromGroupID, request.toGroupID);

    return response;
};