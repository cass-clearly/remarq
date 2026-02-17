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
