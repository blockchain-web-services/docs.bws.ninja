## /raidx

Starts a new raid on an X (Twitter) post. Allows community members to engage with the post
(likes, retweets, replies, quotes) and tracks progress toward target goals.
Only group administrators can start raids.

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

Check current raid progress

```
/raid_status
```

---

## /raid_stop

Stops an active raid before completion

**Admin Only**

```
/raid_stop &lt;raid_id&gt;
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `&amp;lt;raid_id&amp;gt;` |

---

## /raid_history

Show past raids

```
/raid_history
```

---

## /set_raid_defaults

Configure default raid settings

**Admin Only**

```
/set_raid_defaults [settings]
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `[settings]` |

---

## /get_raid_defaults

View current raid settings

```
/get_raid_defaults
```

---

## /set_raid_message_behavior

Configure how raid status messages are updated (edit/repost/pin)

**Admin Only**

```
/set_raid_message_behavior &lt;mode&gt;
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `&amp;lt;mode&amp;gt;` |

---

## /get_raid_message_behavior

View current raid message update behavior

```
/get_raid_message_behavior
```

---

## /set_raid_image

Initiates the raid image upload flow. After executing this command, the bot
will wait for the user to send an image file which will be saved as the raid image.
The image is uploaded to the website S3 bucket for public access and displayed
in raid announcement messages. Only group administrators can execute this command.

**Admin Only**

```
/set_raid_image
```

---

## /auto_raid_config

Configure automatic raid for best tweet of the day

**Admin Only**

```
/auto_raid_config [settings]
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| value | required | `[settings]` |

---

## /get_auto_raid_config

View current auto-raid settings

```
/get_auto_raid_config
```

---

