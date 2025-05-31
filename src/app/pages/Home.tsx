import { RequestInfo } from "rwsdk/worker";

export function Home({ ctx }: RequestInfo) {
  return (
    <div className="p-2">
      <h1>Hello redwood sdk</h1>
    </div>
  );
}
