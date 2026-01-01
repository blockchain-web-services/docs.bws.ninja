## /set_project_name

Sets the project name for the community. This name will be displayed in reports
and on the website. Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_name My Awesome Project
```
```
/set_project_name "Community Token Project"
```

**Parameters:**
- project_name (required): The name of the project

---

## /get_project_name

Retrieves and displays the current project name. If no name is set,
displays a message indicating no project name has been configured.

**Usage:**
```
/get_project_name
```

---

## /set_project_description

Sets the project description for the community. This description provides
context about the project's goals and purpose. Only group administrators 
can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_description A revolutionary DeFi platform for community governance
```
```
/set_project_description "Building the future of decentralized social networks"
```

**Parameters:**
- project_description (required): The description of the project

---

## /get_project_description

Retrieves and displays the current project description. If no description is set,
displays a message indicating no project description has been configured.

**Usage:**
```
/get_project_description
```

---

## /set_project_long_description

Sets the detailed project description for the community. This allows for longer,
more comprehensive project information. Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_long_description This is a comprehensive description of our project...
```

**Parameters:**
- long_description (required): The detailed description of the project

---

## /get_project_long_description

Retrieves the current detailed project description.

**Usage:**
```
/get_project_long_description
```

**Parameters:**
None

---

## /set_project_logo

Initiates the project logo upload flow. After executing this command, the bot
will wait for the user to send an image file which will be saved as the project logo.
The logo is uploaded to the website S3 bucket for public access.
Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_logo
```

---

## /get_project_logo

Retrieves and displays the current project logo URL. If no logo is set,
displays a message indicating no project logo has been configured.

**Usage:**
```
/get_project_logo
```

---

## /set_project_urls

Sets project URLs (website, social media, documentation, etc.). 
Accepts multiple URLs separated by spaces or commas.
Only group administrators can execute this command.

**Admin Only:** Yes - Only group administrators can execute this command.

**Usage:**
```
/set_project_urls https://example.com https://twitter.com/project
```
```
/set_project_urls website.com, discord.gg/invite, github.com/project
```

**Parameters:**
- urls (required): One or more URLs separated by spaces or commas

---

## /get_project_urls

Retrieves the current project URLs.

**Usage:**
```
/get_project_urls
```

**Parameters:**
None

---


## Related Pages

- [Reports](reports) - Generate and manage performance analytics reports for tracked X content.
- [Leaderboard Customization](leaderboard-customization) - Customize scoring points, colors, titles, and display settings for leaderboard reports.
- [Filter Setup](filter-setup) - Manage tracking filters for accounts, keywords, cashtags, mentions, exclusions, and ignore lists.

---

**Need Help?**
- 💬 [Telegram Support](https://t.me/bws_xbot_support)
- 📖 [Command Reference](./)
- 🏠 [Home](../)
