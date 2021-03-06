---
title: API
toc: true
---

An accordion allows generic content to be collapsed and allows users to expand to show more detail.

## Angular Components

{.section-header}

### ClrAccordion

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-accordion></clr-accordion>
```

</DocDemo>

#### Properties

<DocComponentApi component="ClrAccordion" item="bindings" />

### ClrAccordionContent

ClrAccordionContent is a child of [ClrAccordionPanel](./api/#clraccordionpanel)

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-accordion>
  <clr-accordion-panel>
    <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
  </clr-accordion-panel>
</clr-accordion>
```

</DocDemo>

### ClrAccordionDescription

ClrAccordionDescription is a child of [ClrAccordionPanel](./api/#clraccordionpanel)

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-accordion>
  <clr-accordion-panel [(clrAccordionPanelOpen)]="stepOpen">
    <clr-accordion-description
      >The full license information can be found in LICENSE in the root directory.</clr-accordion-description
    >
  </clr-accordion-panel>
</clr-accordion>
```

</DocDemo>

### ClrAccordionPanel

Use content projection and give the panel a title and content that can be hidden or shown.
ClrAccordionPanel is a child of [ClrAccordion](./api/#clraccordion)

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-accordion>
  <clr-accordion-panel></clr-accordion-panel>
</clr-accordion>
```

</DocDemo>

#### Bindings

<DocComponentApi component="ClrAccordionPanel" item="bindings" />

#### Methods

<DocComponentApi component="ClrAccordionPanel" item="methods" />

### ClrAccordionTitle

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-accordion-title>Panel Title</clr-accordion-title>
```

</DocDemo>

## Angular Directives

{.section-header}

### \*clrIfExpanded

A structural directive that optimizes the accordion by only creating the panel content node when its in the open
state. The panel content node is removed from the DOM when closed. The default is false.

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-accordion-content *clrIfExpanded>Panel content</clr-accordion-content>
<clr-accordion-content [(clrIfExpanded)]="panelExpandedProperty">Panel content</clr-accordion-content>
```

</DocDemo>
