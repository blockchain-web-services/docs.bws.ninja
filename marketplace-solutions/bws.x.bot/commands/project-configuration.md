## /set_project_name

Sets your project or community name that will appear in all generated reports, leaderboards, and on the
website dashboard. This is the main identifier for your community and should be your project's official name
or brand. Use this to customize reports with your project's identity instead of using generic Telegram group names.

**Admin Only**

```
/set_project_name CryptoDAO Community
```
```
/set_project_name My Awesome Project
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| project_name | required | `My Project` |

---

## /get_project_name

Displays the current project name configured for your community. Use this to verify what name will appear
in reports and on the website, or to check if a project name has been set yet.

**Admin Only**

```
/get_project_name
```

---

## /set_project_description

Sets a short description of your project that appears in reports and on the website. This should be a concise
summary of what your project does or your community's mission (1-2 sentences). Use this to provide context about
your project's goals when sharing reports with investors, partners, or community members.

**Admin Only**

```
/set_project_description A revolutionary DeFi platform for community governance
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| description | required | `value` |

---

## /get_project_description

Displays the current project description configured for your community. Use this to review the short description
that appears in reports, or to check if a description has been set.

**Admin Only**

```
/get_project_description
```

---

## /set_project_long_description

Sets a detailed, comprehensive description of your project for the website dashboard. Unlike the short description,
this can be multiple paragraphs and include more in-depth information about your project's mission, features,
roadmap, and team. This appears on your public dashboard page to provide visitors with complete project details.

**Admin Only**

```
/set_project_long_description This is a comprehensive description of our project including our mission, technology stack, and future roadmap. We aim to revolutionize...
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| long_description | required | `value` |

---

## /get_project_long_description

Displays the current detailed project description configured for the website dashboard. Use this to review the
comprehensive description that visitors see on your public dashboard page, or to check if a long description
has been set.

**Admin Only**

```
/get_project_long_description
```

---

## /set_project_logo

Uploads your project logo that will appear on reports and the website dashboard. After running this command,
the bot will prompt you to send an image file. Send your logo as a photo or file (PNG, JPG, or GIF recommended).
The logo should be square or rectangular and will be displayed prominently in all generated reports and on your
public dashboard page.

**Admin Only**

```
/set_project_logo
```

---

## /get_project_logo

Displays the URL of your currently configured project logo. Use this to verify which logo will appear in reports
and on the website, or to share the logo URL with team members. If no logo is set, you'll receive a message
prompting you to upload one with /set_project_logo.

**Admin Only**

```
/get_project_logo
```

---

## /set_project_urls

Sets important links for your project including website, social media, documentation, and other resources. These
URLs appear on the website dashboard as clickable links, making it easy for visitors to connect with your project
across different platforms. You can include your website, Twitter/X, Discord, Telegram, GitHub, documentation, or
any other relevant links. Separate multiple URLs with spaces or commas.

**Admin Only**

```
/set_project_urls https://myproject.com https://twitter.com/myproject
```
```
/set_project_urls website.com discord.gg/invite github.com/project docs.myproject.com
```

**Parameters:**

| Name | Type | Example |
|------|------|---------|
| urls | required | `https://myproject.com` |

---

## /get_project_urls

Displays all project URLs currently configured for your community. Use this to review which links appear on the
website dashboard, verify URLs are correct, or check if any URLs have been set.

**Admin Only**

```
/get_project_urls
```

---

