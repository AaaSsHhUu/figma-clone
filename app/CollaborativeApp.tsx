"use client";

import { useOthers } from "@liveblocks/react/suspense";

export function CollaborativeApp() {
  const others = useOthers(); // checks whether there are other users in the room
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
}