# Remarq — Claude Code Instructions

## Git Workflow (Required for All Meaningful Work)

Every meaningful change must follow this process. No exceptions.

### 1. Branch
Create a feature branch off `main` before starting any work:
```
git checkout main && git pull
git checkout -b feature/<short-description>
```

### 2. Implement + Commit
Make changes, commit with clear messages. Push the branch:
```
git push -u origin feature/<short-description>
```

### 3. Open a PR
```
gh pr create --title "<concise title>" --body "<what changed and why>"
```
PR description must explain: what was changed, why it was needed, and how to verify it.

### 4. Spawn a Review Agent
After opening the PR, spawn a review agent using the **Staff+ Craft Quality** persona.

First, read the reviewer persona file, then use it as the system context for the review:

> Read the file `/home/cass/.openclaw/workspace/reviewer-agents/staff-plus-quality.md` — that is your identity and review philosophy. Internalize it fully.
>
> Now review this PR: <PR URL>
>
> Steps:
> 1. Check out the PR branch and read the diff
> 2. Run the full test suite (`npm test`) and confirm it passes
> 3. Review every changed file through your Staff+ lens (see persona file for principles, checklist, anti-patterns)
> 4. Format findings using the severity levels and output format defined in the persona
> 5. Post your review via: `gh pr review <PR URL> --approve --body "..."` OR `gh pr review <PR URL> --request-changes --body "..."`
>
> Optimize for truth, not kindness. Praise good work. Push back on complexity.

### 5. Address Feedback
If the review agent requests changes, fix them on the same branch, push, and re-spawn the review agent.

### 6. Merge (only after approval)
```
gh pr merge --squash --delete-branch
```

## Testing & Coverage

Target 80-90% line coverage. 100% is a waste of time — diminishing returns kick in hard.

### Running tests
- **Server tests:** `npm run test:server`
- **Client tests:** `npm run test:client`
- **All tests:** `npm test`

Both suites use `node:test` + `node:assert/strict` and `c8` for coverage with 80% line threshold.

### Utility modules
Pure functions live in `feedback-layer/src/utils/` as individual modules. These are imported by both the source files and the test files directly — no `_testExports` hacks needed. When adding testable logic, extract it to a utility file in this directory.
