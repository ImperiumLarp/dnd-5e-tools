import { Component, Input } from "@angular/core";
import * as Characters from "../../models/characters";

import * as _ from "lodash";

@Component({
  selector: "skills-display",
  templateUrl: "./skills-display.component.html",
  styleUrls: ["./skills-display.component.scss"]
})
export class SkillsDisplayComponent {
  @Input() character: Characters.Character;
  get skillsList(): string {
    if (!this.character.skillProficiencies || this.character.skillProficiencies.length === 0) { return ""; }
    const bonuses = this.character.skillProficiencies.map((prof) =>
      prof.skill.name + this.format(this.character.getSkillModifier(prof.skill))
    );
    return _.join(bonuses, ", ");
  }

  private format(modifier: number): string {
    return " " + (modifier >= 0) ? " +" + modifier : modifier.toString();
  }
};
