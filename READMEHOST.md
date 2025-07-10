# Play SNEK Mulitplayer:

Welcome to Snek – a hiss-terically sssatisfying terminal-based game where you're a danger noodle with attitude. Slither through the console, dodge obstacles, and sass your way to victory.

## 🎮 How to Play:

Control your snek using the keyboard and slither your way to glory:

- Use `W`, `A`, `S`, `D` to move up, left, down, and right.
- Press number keys (`0`–`9`) to send sassy snek messages.
- Use `=`, `-`, and `.` to change your snek’s speed.

Avoid crashing, stay in control, and don't forget to **watch your tail** 🐍

## 📦 Clone & Install

To get started:

```bash
git clone https://github.com/alisatelier/snake-client.git
```

## 🛠 Setup & Run

To play Snek, you'll need **two terminal windows** open:

---

### Terminal 1: Start the Game Server

```bash
cd snek-multiplayer
npm install
node play.js
```


### Terminal 2: Customize Your Snek Name & Play

Want to show up on the board as `L8R`, `OMG`, or `VIP`?  
You can set a 3-character alphanumeric snek name using a command-line argument:

```bash
node play.js SNK
```

replace 'SNK' with your name of choice. Game will default to SNK if no argument selected.

### Snek Name Rules

- Max **3 characters**
- **Letters and numbers only** (`A–Z`, `0–9`)
- ❌ No symbols
- ❌ No spaces
- ❌ No emojis

---

## 🗺️ Ssslither the Grid

Use **WASD** keys to control your snek:

| Key | Action     | Log Message                  |
| --- | ---------- | ---------------------------- |
| `W` | Move Up    | ⬆️: movin up in the world    |
| `A` | Move Left  | ⬅️: to the left, to the left |
| `S` | Move Down  | ⬇️: down we go!              |
| `D` | Move Right | ➡️: two wrongs !== a right   |

---

## 🟦 Game Speed Controls

Control your snek’s pace with these keys:

| Key(s)    | Action                   | Log Message                  |
| --------- | ------------------------ | ---------------------------- |
| `=` / `+` | Ssslither on faster      | 🟩: sssspeed mode: activated |
| `-`       | Ssslow the pace down     | 🟥: woah there lil guy       |
| `.`       | Return to normal ssspeed | 🟨: ahhh back to basics      |

---

## 💬 Snek Messages

Press number keys (`0`–`9`) to send a sassy snek message:

| Key | Message              |
| --- | -------------------- |
| `0` | who dis dangr noodl  |
| `1` | slitherin on thru    |
| `2` | shedding my past & u |
| `3` | ssspeedy lil snek    |
| `4` | das in cold blood    |
| `5` | watch your tail      |
| `6` | hissss off           |
| `7` | ssssry not sssry     |
| `8` | NOM NOM NNOM         |
| `9` | ctrl + c or u ded    |

## 💻 Dev Notes

**Built With:**

- 🟢 Node.js
- 🧠 Brain cells (some were lost)
- ❤️ Terminal love and caffeine


**Special Thanks To:**

- Larry the AI bot who said, "You're gonna scream, but you're gonna learn." (Jk. Larry isn't sassy enough for such comments).
- The fellow sneks who debugged this with slimmies (like a snek shimmy) of solidarity.
- And to anyone who’s ever 🟩 ssslithered faster at the wrong moment and crashed… you are not alone.

## 🐍 Credits

This snek ain't solo.

**Host Developer:**

[Ali Bird](https://github.com/alisatelier)

Wrote this snek game with nothing but Node.js, her aesthetic custom VS Code theme, sheer willpower, and an _alarming_ number of terminal screams. Lost count of how many times `ctrl + c` saved her life.  
Still thinks “hissss off” is peak comedy.

**Educational Remake**

Big thanks to Lighthouse Labs for assigning the project that made us remake Snake with Node, TCP, and more stress than an actual pit of vipers.

**Original Author**

Thanks to the original brain behind this danger noodle-powered madness.

Long live the snek queen [Tania Rascia](https://github.com/taniarascia/snek) 👑🐍
