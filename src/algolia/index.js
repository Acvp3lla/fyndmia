import search from "algoliasearch/lite";

const appId = "";
const searchKey = "";

const client = search(appId, searchKey);

const workersIndex = client.initIndex("worker");

export { client, workersIndex };
