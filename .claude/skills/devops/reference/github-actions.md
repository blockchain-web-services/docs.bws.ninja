## Phase 4: GitHub Actions Deployment Workflow

### Step 1: Discover Active Workflows (if not already done)

```bash
# List all workflows
gh workflow list --repo blockchain-web-services/docs.bws.ninja
```

### Step 2: Trigger Deployment Workflow

**If workflow runs on push:**
```bash
# Already triggered by git push in Phase 2
# Just monitor the run
```

**If workflow requires manual trigger:**
```bash
gh workflow run deploy-staging.yml --repo blockchain-web-services/docs.bws.ninja
```

### Step 3: Monitor Workflow Execution

**Watch workflow in real-time:**
```bash
# Watch latest run
gh run watch --repo blockchain-web-services/docs.bws.ninja

# List recent runs
gh run list --workflow=deploy-staging.yml --limit 5 --repo blockchain-web-services/docs.bws.ninja
```

### Step 4: Check Workflow Logs

**View logs for specific run:**
```bash
# Get run ID from list
gh run list --workflow=deploy-staging.yml --limit 1 --repo blockchain-web-services/docs.bws.ninja

# View full logs
gh run view <run-id> --log --repo blockchain-web-services/docs.bws.ninja

# View logs for specific job
gh run view <run-id> --log --job <job-id> --repo blockchain-web-services/docs.bws.ninja
```

**Check for failures:**
```bash
# View only failed runs
gh run list --workflow=deploy-staging.yml --status=failure --repo blockchain-web-services/docs.bws.ninja

# View failed run details
gh run view <failed-run-id> --repo blockchain-web-services/docs.bws.ninja
```

### Step 5: Analyze Deployment Job Logs

When checking logs, look for:
- CloudFormation deployment commands
- AWS CLI output
- Error messages
- Stack creation/update status
- Resource creation failures

**Example log analysis:**
```bash
# View logs and grep for errors
gh run view <run-id> --log --repo blockchain-web-services/docs.bws.ninja | grep -i "error\|failed\|exception"

# Check CloudFormation-specific logs
gh run view <run-id> --log --repo blockchain-web-services/docs.bws.ninja | grep "cloudformation"
```

