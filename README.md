# Play SNEK Mulitplayer:

Welcome to Snek – a hiss-terically sssatisfying terminal-based game where you're a danger noodle with attitude. Slither through the console, dodge obstacles, and sass your way to victory.

## 🎮 How to Play:

Control your snek using the keyboard and slither your way to glory:

- Use `w`, `a`, `s`, `d` to move up, left, down, and right.
- Press number keys (`0`–`9`) to send sassy snek messages.
- Use `+/=`, `-`, and `.` to change your snek’s speed.

Avoid crashing, stay in control, and don't forget to **watch your tail** 🐍

---

## 📦 Clone & Install

To get started:

```bash
git clone https://github.com/alisatelier/snake-client.git
cd snake-client
```
---

## 🛠 Setup & Run

To play Snek, you'll need `two terminal windows` open:


### Terminal 1: Game Arena

Think of this as the main screen. It shows the game board where all sneks move around.

```bash
cd snek-multiplayer
npm install
npm run play
```

### Terminal 2: Snek Controller

This is where you join the game and control your snek. It’s also where your snek’s log messages (moves, speed, etc.) will appear. You should remain in the snake-client folder for this terminal.

#### Snek Name:

Want to show up on the board as `L8R`, `VPR`, or `DED`?  
You can set a 3-character alphanumeric snek name using a command-line argument:

```bash
node play.js SNK
```

replace 'SNK' with your name of choice. Game will default to `SNK` if no argument is applied.

#### Snek Name Rules

- Max **3 characters**
- **Letters and numbers only** (`A–Z`, `0–9`)
- ❌ No symbols
- ❌ No spaces
- ❌ No emojis


##### ** Muliplayer in Name, Not Function
  This game does not have a firewall, therefore the game is intended to be played on your own computer. Connecting to public internet is **not recommended**.

## 🗺️ Slither the Grid

Use **WASD** keys to control your snek:

```markdown
| Key |  Action      | Log Message                         |
| --- |  ----------  | ---------------------------------   |
|  w  |  Move Up     | ⬆️:    movin up in the world    :⬆️ |
|  a  |  Move Left   | ⬅️:  to the left, to the left   :⬅️ |
|  s  |  Move Down   | ⬇️:        down we go!          :⬇️ |
|  d  |  Move Right  | ➡️:    two wrongs !== a right   :➡️ |

ps. three lefts do
```
---

## 🟦 Game Speed Controls

Control your snek’s pace with these keys:

```markdown
| Key(s)    | Action                   | Log Message                      |
| --------- | ------------------------ | -------------------------------- |
|   = / +   | Ssslither on faster      | 🟩: sssspeed mode: activated :🟩 |
|     -     | Ssslow the pace down     | 🟥:    woah there lil guy    :🟥 |
|     .     | Return to normal ssspeed | 🟨:    ahhh that's better    :🟨 |
```
---

## 💬 Snek Messages

Press number keys (`0`–`9`) to send a sassy snek message:

```markdown
| Key | Broadcast Message    | Notes
| --- | -------------------- | --------------------
|  0  | who dis dangr noodl  | makes a great welcome
|  1  | slitherin on thru    | kinda like 'excuse me' but hissy
|  2  | shedding my past & u | synonymous with 'eat my dust'
|  3  | ssspeedy lil snek    | facts: declare your dominance
|  4  | das in cold blood    | when another player cuts you off 🙄
|  5  | watch ur tail        | friendly(ish) warning... or a subtle threat
|  6  | hissss off           | snek equivalent of flipping the table 
|  7  | ssssry not sssry     | when you steal their space *and* make em crash
|  8  | NOM NOM NNOM         | when you eat a good pixel or feel unhinged
|  9  | ctrl + c or u ded    | final warning — you're the apex predator  
```

---

## 💻 Dev Notes

**Built With:**

- 🟢 Node.js
- 🧠 Brain cells (some were lost)
- ❤️ Terminal love and caffeine

**Special Thanks To:**

- Larry the AI bot who said, "You're gonna scream, but you're gonna learn." (Jk. Larry isn't sassy enough for such comments).
- The fellow sneks who debugged this with slimmys (like a snek slither-shimmy) of solidarity.
- And to anyone who’s ever ssslithered faster at the wrong moment and crashed… you are not alone.

---

## 📋 Credits

This snek ain't solo.

**Host Developer:**

[Ali Bird](https://github.com/alisatelier) wrote this snek game with nothing but Node.js, an aestheticaly pleasing custom VS Code theme, sheer willpower, and an _alarming_ number of terminal screams. Lost count of how many times `ctrl + c` saved her life.  
Still thinks “hissss off” is peak comedy.

**Educational Remake:**

Thanks to Lighthouse Labs for assigning the project that made us remake Snake with Node, TCP, and more stress than an actual pit of vipers.

**Original Author:**

Kudos to the original brain behind this danger noodle-powered madness.

Long live the snek queen [Tania Rascia](https://github.com/taniarascia/snek) 👑🐍

---

## 🎁 Bonus: 3-Character Snek Name Ideas

Struggling to name your snek? Here’s some inspo.  
All names are 3-character, alphanumeric, and full of bite.


### Sassy Sneks
| Name | Vibe                            |
|------|---------------------------------|
| `OMG` | Obvious Main Girl / Guy        |
| `L8R` | Slither fast, peace out        |
| `BYE` | Exit strategy activated        |
| `BFF` | Until you bite me              |
| `YAS` | Fierce and fabulous            |
| `EEK` | Cute panic                     |
| `MEW` | Wrong animal, right chaos      |
| `HEH` | Gremlin giggle                 |
| `DED` | For when they get too close    |
| `LOL` | Laughing while wrecking you    |
| `GTG` | Gotta terminate [you] guys     |
| `BOI` | Try me. I dare you.            |
| `GRR` | All jungle, no chill           |


### Its a Jungle in Here
| Name | Vibe                            |
|------|---------------------------------|
| `ZOO` | It’s a whole ecosystem in here |
| `SSS` | Maximum hisssss                |
| `GPS` | Global Python Ssssytem         |
| `VIP` | Very Important Python          |
| `COB` | Cobra in disguise              |
| `RTL` | Rattler in disguise            |
| `VPR` | Viper in disguise              |
| `DMV` | Danger Management Viper        |



### Ferda Code-Sneks

| Name | Vibe                               |
|------|------------------------------------|
| `404` | Snek not found                    |
| `DEV` | Your logs won’t save you now.     |
| `CPU` | Cold-blooded processing unit      |
| `BUG` | Slithered into your logic         |
| `EOF` | End of Fang                       |
| `VAR` | Variable threat                   |
| `LET` | Lethal Every Time                 |
| `GIT` | Committed to chaos                |
| `NPM` | Noodl Package Manager             |
| `CLI` | Command Line Instincts            |
| `LOX` | Locks your thread *and* your ankles |
| `NAH` | Not A Handler (also: just rude)   |

