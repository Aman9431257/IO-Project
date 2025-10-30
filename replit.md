# IO Project - Real-time Multiplayer Knowledge Game

## Overview
IO Project is a browser-based, real-time multiplayer general knowledge game designed for fast, fun, and competitive learning. The project has been successfully migrated from Vercel to Replit.

**Current State:** Development environment running successfully on Replit

## Recent Changes (October 30, 2025)

### Server Conversion to JavaScript (October 30, 2025)
- Converted server from TypeScript to pure JavaScript ES6 modules
- Removed all TypeScript dependencies from server (typescript, tsx, ts-node, @types/*)
- Updated server to use Node.js directly instead of TypeScript runtime
- Changed server port from 2567 to 3000 for Replit compatibility
- Fixed CommonJS/ESM compatibility for Colyseus imports
- Created Server workflow running on port 3000

### Migration from Vercel to Replit (October 29, 2025)
- Downgraded Next.js from v16 to v15.5.6 for Replit compatibility (v16 was causing bus errors)
- Updated React from v19 to v18.3 for stability
- Configured Next.js dev server to bind to 0.0.0.0:5000 for Replit proxy compatibility
- Configured deployment settings for Replit autoscale
- Created comprehensive .gitignore file

## Project Architecture

### Monorepo Structure
```
.
├── client/          # Next.js frontend application
│   ├── app/         # Next.js 15 app directory
│   ├── public/      # Static assets
│   └── package.json
├── server/          # Colyseus game server
│   ├── rooms/       # Game room definitions
│   ├── index.ts     # Server entry point
│   └── package.json
└── package.json     # Root package.json
```

### Technology Stack

#### Client (Frontend)
- **Framework:** Next.js 15.5.6
- **React:** 18.3.1
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5
- **Port:** 5000 (configured for Replit)

#### Server (Backend)
- **Game Server:** Colyseus 0.15.0
- **Web Framework:** Express 4.18.2
- **Language:** JavaScript ES6 (ESM)
- **Runtime:** Node.js (native)
- **Port:** 3000 (configurable via PORT env var)

### Key Configuration Changes for Replit

1. **Next.js Development Server:**
   - Binds to `0.0.0.0:5000` instead of localhost
   - Configured via `-p 5000 -H 0.0.0.0` flags
   - Required for Replit's proxy to work correctly

2. **Server ES6 Module Configuration:**
   - Added `"type": "module"` to server/package.json for native ES6 module support
   - Using Node.js directly (no TypeScript compilation needed)
   - Fixed CommonJS/ESM compatibility for Colyseus imports

3. **Deployment Configuration:**
   - Target: Autoscale (stateless frontend)
   - Build: `cd client && npm install && npm run build`
   - Run: `cd client && npm run start`

## Running the Project

### Development
The Next.js client runs automatically via the configured workflow on port 5000.

To run the Colyseus server separately:
```bash
cd server && npm run dev
```

### Production Deployment
The project is configured for Replit's autoscale deployment, which will:
1. Install client dependencies
2. Build the Next.js application
3. Start the production server on port 5000

## Environment Variables

Currently, no environment variables are required for basic operation. If you need to add API keys or secrets:
- Use Replit's Secrets feature
- Common variables: DATABASE_URL, API keys, etc.

## Known Issues & Solutions

### Next.js v16 Bus Error
- **Issue:** Next.js 16 (canary) causes bus errors on Replit
- **Solution:** Downgraded to Next.js 15.5.6 (stable)

### TypeScript ESM Errors
- **Issue:** CommonJS/ESM conflicts in server
- **Solution:** Added `"type": "module"` and switched to `tsx`

## User Preferences
- Package Manager: npm
- Node.js Version: 20.19.3

## Next Steps
1. Implement game room logic in `server/rooms/MyRoom.ts`
2. Connect Next.js frontend to Colyseus server
3. Add real-time multiplayer game features
4. Configure environment variables if needed for external services
