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
After opening the PR, spawn a fresh **general-purpose** agent with this prompt:

> You are a staff+ level engineer conducting a code review. Optimize for truth, not kindness.
> Review PR: <PR URL>
>
> You must:
> - Run the full test suite and confirm it passes before approving
> - Call out overengineering (unnecessary abstraction, premature generalization, excess complexity)
> - Call out underengineering (missing error handling at system boundaries, unsafe assumptions, skipped validation)
> - Flag any bugs, security issues, or API contract violations
> - Verify the PR description accurately describes the changes
> - Post your review via: `gh pr review <PR URL> --approve --body "..."` OR `gh pr review <PR URL> --request-changes --body "..."`

### 5. Address Feedback
If the review agent requests changes, fix them on the same branch, push, and re-spawn the review agent.

### 6. Merge (only after approval)
```
gh pr merge --squash --delete-branch
```

## Documentation

All functional changes (new features, changed behavior, new keyboard shortcuts, configuration options) must be documented in README.md before the PR is opened.

## Testing & Coverage

Target 80-90% line coverage. 100% is a waste of time — diminishing returns kick in hard.

### Running tests
- **Server tests:** `npm run test:server`
- **Client tests:** `npm run test:client`
- **All tests:** `npm test`

Both suites use `node:test` + `node:assert/strict` and `c8` for coverage with 80% line threshold.

### Utility modules
Pure functions live in `feedback-layer/src/utils/` as individual modules. These are imported by both the source files and the test files directly — no `_testExports` hacks needed. When adding testable logic, extract it to a utility file in this directory.
