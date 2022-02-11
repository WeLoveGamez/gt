import { ref } from 'vue'
import * as type from '@/types'
export const production = ref(process.env.NODE_ENV === 'production' ? true : false)
export const bossFight = ref(false)
export const skillDetails = {
    fastAbility: { name: 'rocket propulsion', maxlvl: 1, description: 'you can speed up your movement' },
    slowAbility: { name: 'sapr flame', maxlvl: 1, description: ' you can slow down your movement' },
    bombAbility: { name: 'remote detonator', maxlvl: 1, description: 'you can remote ignition the nearest bomb' },
    shotAbility: { name: 'plasma thrower', maxlvl: 1, description: ' you can shoot at enemies' },
    betterCoin: { name: 'golden coin', maxlvl: 20, description: 'the coin give more score' },
    longerSlowEnemies: { name: 'galactic freeze', maxlvl: 20, description: 'the enemy slow effect holds longer' },
    betterGrowPotion: { name: 'alchemist', maxlvl: 20, description: 'while grwon you gain more score' },
    spawnLessEnemy: { name: 'cowards', maxlvl: 20, description: 'it takes longer for additional enemies to spawn' },
    longerStopTime: { name: 'time anomaly', maxlvl: 20, description: 'time stands still longer' },
    scoreMultiplicator: { name: 'golden times', maxlvl: 20, description: 'you gain more score' },
    smallerBlackHole: { name: 'cute black holes', maxlvl: 20, description: 'black holes are smaller' },
    slowEnemy: { name: 'braking fog', maxlvl: 20, description: 'enemies will slow down' },
    longerMagnet: { name: 'permanent magnet', maxlvl: 20, description: 'the magnet lasts longer' },
}
export const weaponDetails = {
    moreDamage: { name: 'power weapon', maxlvl: 10, description: 'your plasma makes more damage' },
    biggerProjectile: { name: 'big plasma', maxlvl: 10, description: 'your plasma gets bigger' },
    fasterProjectile: { name: 'high frequency', maxlvl: 10, description: 'your plasma gets faster' },
    fasterReload: { name: 'load automatically', maxlvl: 10, description: 'increases your reload speed' },
}
//player

export function checkPlayer(checkedPlayer: type.Player) {
    checkedPlayer = checkedPlayer || {}
    checkedPlayer.size = checkedPlayer.size || 20
    checkedPlayer.id = checkedPlayer.id || ''
    checkedPlayer.originalSize = checkedPlayer.originalSize || 20
    checkedPlayer.vector = checkedPlayer.vector || [0, 0]
    checkedPlayer.moveVector = checkedPlayer.moveVector || [0, 0]
    checkedPlayer.speed = checkedPlayer.speed || 5
    checkedPlayer.outlook = checkedPlayer.outlook || 'up'
    checkedPlayer.highscore = checkedPlayer.highscore || 0
    checkedPlayer.highscoreHardcore = checkedPlayer.highscoreHardcore || 0
    checkedPlayer.username = checkedPlayer.username || 'gast'
    checkedPlayer.img = checkedPlayer.img || ''
    checkedPlayer.registeredAt = checkedPlayer.registeredAt || 0
    checkedPlayer.playedGames = checkedPlayer.playedGames || 0
    checkedPlayer.playedHardcore = checkedPlayer.playedHardcore || 0
    checkedPlayer.defeatedBosses = checkedPlayer.defeatedBosses || 0
    checkedPlayer.hardcoreMode = checkedPlayer.hardcoreMode || false
    checkedPlayer.weaponTree.weaponType = checkedPlayer.weaponTree.weaponType || 'standard'
    checkedPlayer.weaponTree.weaponAvaibleTypes = checkedPlayer.weaponTree.weaponAvaibleTypes || ['standard']
    checkedPlayer.weaponTree =
        checkedPlayer.weaponTree ||
        ({
            weaponType: 'standard',
            weaponAvaibleTypes: ['standard'],
            weaponPoints: 0,
            weaponUpgrades: [] as type.WeaponUpgrade[],
        } as type.WeaponTree)
    for (const weaponUpgrade of ['moreDamage', 'biggerProjectile', 'fasterProjectile', 'fasterReload']) {
        if (checkWeaponUpgrade(checkedPlayer, weaponUpgrade)) {
            checkedPlayer.weaponTree.weaponUpgrades.push({ name: weaponUpgrade as type.WeaponUpgradeName, lvl: 0, maxlvl: 10 })
        }
    }

    checkedPlayer.skillTree =
        checkedPlayer.skillTree ||
        ({
            skillPoints: 0,
            skills: [] as type.Skill[],
        } as type.SkillTree)
    for (const skill of ['shotAbility', 'fastAbility', 'slowAbility', 'bombAbility']) {
        if (checkSkill(checkedPlayer, skill)) {
            checkedPlayer.skillTree.skills.push({ name: skill as type.SkillName, lvl: 0 })
        }
    }
    for (const skill of [
        'longerStopTime',
        'longerSlowEnemies',
        'slowEnemy',
        'spawnLessEnemy',
        'scoreMultiplicator',
        'betterCoin',
        'longerMagnet',
        'betterGrowPotion',
        'smallerBlackHole',
    ]) {
        if (checkSkill(checkedPlayer, skill)) {
            checkedPlayer.skillTree.skills.push({ name: skill as type.SkillName, lvl: 0 })
        }
    }
    return checkedPlayer
}
function checkWeaponUpgrade(checkedPlayer: type.Player, weaponUpgrade: string) {
    return checkedPlayer.weaponTree.weaponUpgrades[checkedPlayer.weaponTree.weaponUpgrades.findIndex(s => s.name == weaponUpgrade)] === undefined
}
function checkSkill(checkedPlayer: type.Player, skill: string) {
    return checkedPlayer.skillTree.skills[checkedPlayer.skillTree.skills.findIndex(s => s.name == skill)] === undefined
}
