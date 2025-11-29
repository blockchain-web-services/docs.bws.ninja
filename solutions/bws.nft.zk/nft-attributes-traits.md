---
description: Making your NFT unique.
---

# NFT Attributes (traits)

Non-fungible tokens (NFTs) represent unique digital assets on blockchain platforms. Those assets can define associated _traits_, which are specific attributes or characteristics that detail each NFT.&#x20;

In a practical scenario, an NFT's metadata might look something like this for a digital art collection of animated cats:

```json
{
  "name": "Animated Cat #001",
  "description": "A unique animated cat with distinct features.",
  "image": "ipfs://QmcduEBAppXxnyn37deHHf33Ep7cPbYxn1mH36Nvvowkiu",
  "attributes": [
    {
      "trait_type": "Fur Color",
      "value": "Black"
    },
    {
      "trait_type": "Eye Type",
      "value": "Round"
    },
    {
      "trait_type": "Accessories",
      "value": "Hat"
    }
  ]
}
```

Within the metadata, the `attributes` array contains the various traits of the NFT. Each trait is defined by a `trait_type`, which specifies the category of the trait (e.g., "Fur Color" or "Rarity"), and a `value`, which indicates the specific characteristic of that trait (e.g., "Black" or "Ultra-Rare").

Traits encapsulated within this metadata not only bring out the uniqueness of each token but can also influence its perceived value, especially if some traits are considered rarer than others.&#x20;

<mark style="background-color:purple;">BWS.NFT.zK allows you to create an NFT by passing those traits</mark>.&#x20;

{% hint style="warning" %}
Please note that it's the usage of those traits when visualizing your NFT that you must take care of and validate. \
\
For example, if you use the provided [Certificate of Trust](../../certificate-of-trust.md) for your users' experience use case, you must check they are correctly displayed.&#x20;
{% endhint %}

