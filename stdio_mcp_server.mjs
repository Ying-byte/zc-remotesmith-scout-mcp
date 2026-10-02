#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotesmith",
  boardId: "remotesmith-official",
  domain: "remotesmith.com",
  npmName: "zc-remotesmith-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
