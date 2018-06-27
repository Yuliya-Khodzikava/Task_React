import React from "react";
import { storiesOf } from "@storybook/react";
import SearchButton from './SearchButton.js';

storiesOf("elements", module).add("button", () => (
    <div>
        { SearchButton }
    </div>
));