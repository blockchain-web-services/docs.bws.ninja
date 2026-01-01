## /raidx

Launches a coordinated community raid on an X (Twitter) post to boost engagement. Community members receive
a raid announcement with the target post and engagement goals (likes, retweets, replies, quotes, bookmarks).
The bot tracks progress in real-time and celebrates when targets are met. Raids help amplify important posts,
support partners, or drive visibility for project announcements.

**Admin Only**

```
/raidx https://x.com/username/status/123456
```
```
/raidx https://x.com/username/status/123456 likes=50 retweets=20
```
```
/raidx https://x.com/username/status/123456 duration=1h mute=yes
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| post_url | required | `https://x.com/username/status/123456` |
| likes | optional | `50` |
| retweets | optional | `20` |
| replies | optional | `50` |
| quotes | optional | `50` |
| bookmarks | optional | `50` |
| duration | optional | `1h` |
| mute | optional | `yes` |

---

## /raid_status

Displays real-time progress of active raids, showing current engagement numbers vs. targets for likes, retweets,
replies, quotes, and bookmarks. You can check a specific raid by ID or see the latest active raid. Use this to
monitor how your community is progressing toward raid goals and motivate participation.

**Admin Only**

```
/raid_status
```
```
/raid_status RAID_123456
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| raid_id | optional | `value` |

---

## /raid_stop

Cancels an active raid immediately, stopping progress tracking and notifications. Use this when you need to end
a raid early - for example, if the target post was deleted, targets were already met naturally, or the raid was
started by mistake. The raid status will be marked as "CANCELLED" in the raid history.

**Admin Only**

```
/raid_stop RAID_123456
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| raid_id | required | `value` |

---

## /raid_history

Displays a list of previous raids with their completion status, targets, and results. Review past raid performance
to see which raids were successful, how long they took, and engagement levels achieved. Useful for analyzing
community participation patterns and planning future raids.

**Admin Only**

```
/raid_history
```
```
/raid_history 20
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| limit | optional | `value` |

---

## /set_raid_defaults

Configures default settings for all future raids including target engagement numbers, duration, auto-mute behavior,
and whether raids are enabled. These defaults are used when you start a raid without specifying custom parameters.
Set these once to match your community's typical raid goals, then override them per-raid when needed with /raidx parameters.

**Admin Only**

```
/set_raid_defaults likes=30 retweets=15 duration=1h
```
```
/set_raid_defaults enabled=yes mute=no duration=2h
```
```
/set_raid_defaults likes=50 retweets=25 replies=10 quotes=5 bookmarks=20
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| likes | optional | `30` |
| retweets | optional | `15` |
| replies | optional | `10` |
| quotes | optional | `5` |
| bookmarks | optional | `20` |
| duration | optional | `1h` |
| mute | optional | `no` |
| enabled | optional | `yes` |

---

## /get_raid_defaults

Displays the current default raid settings including target numbers for all engagement types, default duration,
auto-mute behavior, and raid enable/disable status. Use this to review your configured defaults before starting
a raid or to verify settings after using /set_raid_defaults.

**Admin Only**

```
/get_raid_defaults
```

---

## /set_raid_message_behavior

Controls how the bot updates raid progress messages in the chat. Choose between three modes: "edit" (updates the
existing message cleanly), "repost" (deletes and resends to keep it at the bottom of the chat), or "pin" (updates
and pins the message to keep it visible at the top). Different modes suit different community preferences and chat
activity levels.

**Admin Only**

```
/set_raid_message_behavior edit
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| mode | required | `value` |

---

## /get_raid_message_behavior

Shows the currently configured raid message update mode (edit, repost, or pin) and explains what that mode does.
Use this to verify how raid progress messages will be displayed in your chat.

**Admin Only**

```
/get_raid_message_behavior
```

---

## /set_raid_image

Uploads a custom image that appears in all raid announcement messages for your community. After running this
command, the bot will prompt you to send an image file. This branded image helps make raid announcements more
visually appealing and recognizable to your community. The image is displayed prominently in every raid message.

**Admin Only**

```
/set_raid_image
```

---

## /auto_raid_config

Configures automatic raids that trigger for the "Best Tweet of the Day" selected during daily report generation.
When enabled, the bot automatically starts a raid on the top-performing post a few minutes after the report is
published. This helps consistently boost your best content without manual raid creation. Configure raid duration,
delay before starting, target engagement numbers, and auto-mute behavior.

**Admin Only**

```
/auto_raid_config enabled=no
```
```
/auto_raid_config enabled=yes duration=360 delay=5
```
```
/auto_raid_config enabled=yes likes=100 retweets=50 duration=360
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| enabled | optional | `no` |
| duration | optional | `360` |
| delay | optional | `5` |
| likes | optional | `100` |
| retweets | optional | `50` |
| replies | optional | `50` |
| quotes | optional | `50` |
| bookmarks | optional | `50` |
| mute | optional | `yes` |

---

## /get_auto_raid_config

Displays the current auto-raid configuration including whether it's enabled, the raid duration, start delay after
report, target engagement numbers, and auto-mute setting. Use this to review your auto-raid setup or verify changes
after using /auto_raid_config.

**Admin Only**

```
/get_auto_raid_config
```

---

