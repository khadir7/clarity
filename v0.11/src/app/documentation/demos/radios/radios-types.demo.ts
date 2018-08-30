/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<form>
    <section class="form-block">
        <label>Radio Buttons</label>
        <div class="form-group">
            <label>Default/Stacked radio button group</label>
            <div class="radio">
                <input type="radio" name="gridRadio
                s" id="checkrads_9">
                <label for="checkrads_9">Radio option 1</label>
            </div>
            <div class="radio">
                <input type="radio" name="gridRadios" id="checkrads_10" checked>
                <label for="checkrads_10">Radio option 2 (checked)</label>
            </div>
        </div>
        <div class="form-group">
            <label>Inline radio button group</label>
            <div class="radio-inline">
                <input type="radio" name="gridRadios1" id="checkrads_11">
                <label for="checkrads_11">Radio option 1</label>
            </div>
            <div class="radio-inline">
                <input type="radio" name="gridRadios1" id="checkrads_12" checked>
                <label for="checkrads_12">Radio option 2 (checked)</label>
            </div>
        </div>
        <div class="form-group">
            <label>These are disabled radio buttons</label>
            <div class="radio disabled">
                <input type="radio" name="gridRadios2" id="checkrads_13" disabled>
                <label for="checkrads_13">Radio option disabled and unchecked</label>
            </div>
            <div class="radio disabled">
                <input type="radio" name="gridRadios2" id="checkrads_14" disabled checked>
                <label for="checkrads_14">Radio option disabled and checked</label>
            </div>
        </div>
    </section>
</form>
`;

@Component({
    selector: "clr-radios-types-demo",
    templateUrl: "./radios-types.demo.html"
})
export class RadiosTypesDemo {
    example = EXAMPLE;
}