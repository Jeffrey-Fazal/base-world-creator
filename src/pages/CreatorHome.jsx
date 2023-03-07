// Where creators can create their worlds
//  via /creator route

import { CreatorGuide } from "../components/CreatorComponents/CreatorGuide";

export function CreatorHome() {
    return (
        <>
            <div>
                <h1>Time to create your world</h1>
            </div>
            <br />
            <CreatorGuide />
            <br />
            <div>
                <p>To start change how the world works</p>
            </div>

            <h1>Character guides</h1>
            <br />

            <p>Think about a characters attributes, their background and story. The Quantify it or roll for it!</p>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">HitPoint Max</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="30" className="input input-bordered" />
                    <span>HP</span>
                    <button className="btn btn-primary">Update HP</button>
                </label>
            </div>

            <br />
            <div>
                <ul>
                <li>name?: string</li>
                <li>classLevel?: string</li>
                <li>background?: string</li>
                <li>playerName?: string</li>
                <li>faction?: string</li>
                <li>race?: string</li>
                <li>alignment?: string</li>
                <li>xp?: string</li>
                <li>dciNo?: string</li>
                <li>str?: string</li>
                <li>dex?: string</li>
                <li>con?: string</li>
                <li>int?: string</li>
                <li>wis?: string</li>
                <li>cha?: string</li>
                <li>inspiration?: string</li>
                <li>proficiencyBonus?: string</li>
                <li>strSave?: string</li>
                <li>strSaveChecked?: boolean</li>
                <li>dexSave?: string</li>
                <li>dexSaveChecked?: boolean</li>
                <li>conSave?: string</li>
                <li>conSaveChecked?: boolean</li>
                <li>intSave?: string</li>
                <li>intSaveChecked?: boolean</li>
                <li>wisSave?: string</li>
                <li>wisSaveChecked?: boolean</li>
                <li>chaSave?: string</li>
                <li>chaSaveChecked?: boolean</li>
                <li>skillAcrobatics?: string</li>
                <li>skillAcrobaticsChecked?: boolean</li>
                <li>skillAnimalHandling?: string</li>
                <li>skillAnimalHandlingChecked?: boolean</li>
                <li>skillArcana?: string</li>
                <li>skillArcanaChecked?: boolean</li>
                <li>skillAthletics?: string</li>
                <li>skillAthleticsChecked?: boolean</li>
                <li>skillDeception?: string</li>
                <li>skillDeceptionChecked?: boolean</li>
                <li>skillHistory?: string</li>
                <li>skillHistoryChecked?: boolean</li>
                <li>skillInsight?: string</li>
                <li>skillInsightChecked?: boolean</li>
                <li>skillIntimidation?: string</li>
                <li>skillIntimidationChecked?: boolean</li>
                <li>skillInvestigation?: string</li>
                <li>skillInvestigationChecked?: boolean</li>
                <li>skillMedicine?: string</li>
                <li>skillMedicineChecked?: boolean</li>
                <li>skillNature?: string</li>
                <li>skillNatureChecked?: boolean</li>
                <li>skillPerception?: string</li>
                <li>skillPerceptionChecked?: boolean</li>
                <li>skillPerformance?: string</li>
                <li>skillPerformanceChecked?: boolean</li>
                <li>skillPersuasion?: string</li>
                <li>skillPersuasionChecked?: boolean</li>
                <li>skillReligion?: string</li>
                <li>skillReligionChecked?: boolean</li>
                <li>skillSlightOfHand?: string</li>
                <li>skillSlightOfHandChecked?: boolean</li>
                <li>skillStealth?: string</li>
                <li>skillStealthChecked?: boolean</li>
                <li>skillSurvival?: string</li>
                <li>skillSurvivalChecked?: boolean</li>
                <li>passivePerception?: string</li>
                <li>otherProficiencies?: string</li>
                <li>ac?: string</li>
                <li>init?: string</li>
                <li>speed?: string</li>
                <li>maxHp?: string</li>
                <li>hp?: string</li>
                <li>tempHp?: string</li>
                <li>hitDiceMax?: string</li>
                <li>hitDice?: string</li>
                <li>deathsaveSuccesses?: number</li>
                <li>deathsaveFailures?: number</li>
                <li>attacks?: any[]</li>
                <li>attacksText?: string</li>
                <li>cp?: string</li>
                <li>sp?: string</li>
                <li>ep?: string</li>
                <li>gp?: string</li>
                <li>pp?: string</li>
                <li>equipment?: string</li>
                <li>equipment2?: string</li>
                <li>personalityTraits?: string</li>
                <li>ideals?: string</li>
                <li>bonds?: string</li>
                <li>flaws?: string</li>
                <li>featuresTraits?: string</li>
                <li>age?: string</li>
                <li>height?: string</li>
                <li>weight?: string</li>
                <li>eyes?: string</li>
                <li>skin?: string</li>
                <li>hair?: string</li>
                <li>appearance?: string</li>
                <li>backstory?: string</li>
                <li>factionImg?: string</li>
                <li>factionRank?: string</li>
                <li>allies?: string</li>
                <li>allies2?: string</li>
                <li>additionalFeatures?: string</li>
                <li>additionalFeatures2?: string</li>
                <li>totalNonConsumableMagicItems?: string</li>
                <li>treasure?: string</li>
                <li>treasure2?: string</li>
                <li>spellcastingClass?: string</li>
                <li>preparedSpellsTotal?: string</li>
                <li>spellSaveDC?: string</li>
                <li>spellAttackBonus?: string</li>
                <li>cantrips?: any[]</li>
                <li>lvl1SpellSlotsTotal?: string</li>
                <li>lvl1SpellSlotsUsed?: number</li>
                <li>lvl1Spells?: any[]</li>
                <li>lvl2SpellSlotsTotal?: string</li>
                <li>lvl2SpellSlotsUsed?: number</li>
                <li>lvl2Spells?: any[]</li>
                <li>lvl3SpellSlotsTotal?: string</li>
                <li>lvl3SpellSlotsUsed?: number</li>
                <li>lvl3Spells?: any[]</li>
                <li>lvl4SpellSlotsTotal?: string</li>
                <li>lvl4SpellSlotsUsed?: number</li>
                <li>lvl4Spells?: any[]</li>
                <li>lvl5SpellSlotsTotal?: string</li>
                <li>lvl5SpellSlotsUsed?: number</li>
                <li>lvl5Spells?: any[]</li>
                <li>lvl6SpellSlotsTotal?: string</li>
                <li>lvl6SpellSlotsUsed?: number</li>
                <li>lvl6Spells?: any[]</li>
                <li>lvl7SpellSlotsTotal?: string</li>
                <li>lvl7SpellSlotsUsed?: number</li>
                <li>lvl7Spells?: any[]</li>
                <li>lvl8SpellSlotsTotal?: string</li>
                <li>lvl8SpellSlotsUsed?: number</li>
                <li>lvl8Spells?: any[]</li>
                <li>lvl9SpellSlotsTotal?: string</li>
                <li>lvl9SpellSlotsUsed?: number</li>
                <li>lvl9Spells?: any[]</li>
                </ul>
            </div>
        </>
    )
}