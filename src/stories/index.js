import React from 'react';

import { storiesOf } from '@storybook/react';

import CanvasRce from 'canvas-rce/lib/modules/rce/CanvasRce';

const rceProps = {
  editorOptions: () => {
    return {};
  },
  defaultContent: "Test RCE content",
  textareaId: "textarea"
}

storiesOf('Demo', module)
.add('Canvas RCE 1', () => <CanvasRce
  rceProps={rceProps}
/>)
.add('Canvas RCE 2', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 3', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 4', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 5', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 6', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 7', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 8', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 9', () => <CanvasRce
rceProps={rceProps}
/>)
.add('Canvas RCE 10', () => <CanvasRce
rceProps={rceProps}
/>);
