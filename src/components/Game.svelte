<script>
    import { Inspect } from "lucide-react";

    let { game } = $props(); // keys: Day, Date, Time, Venue, Address, Home, Away
    // try to parse game.Date as a date, otherwise leave it as is because it might be TBD
    let isHome = $derived(game.Home === "Somerville United FC");
    let displayDate = $derived.by(() => {
        let dateStr;
        try {
            let parsedDate = new Date(game.Date);
            if (isNaN(parsedDate)) throw new Error("Invalid date");
            dateStr = parsedDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });
        } catch {
            dateStr = game.Date;
        }
        return dateStr;
    });
</script>

<div class="game-row">
    <div>
        <div class="date-circle">
            <span class="game-date">{displayDate}</span>
            <span class="game-time">{game.Time}</span>
        </div>
    </div>
    <div>
        <span class="game-prefix">{isHome ? 'vs' : 'at'}</span>
        <span class="game-opponent">{isHome ? game.Away : game.Home}</span>        
        <br />
        <span class="game-venue">{game.Venue}</span>
    </div>
    <div>
        <a href="tickets">
            <button class="btn">Buy Tickets</button>
        </a>
    </div>
</div>

<style>
    .game-row {
        height: 130px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 25px 0;
        border-top: 1px solid var(--secondary);
    }
    .game-row > div {
        text-align: left;
    }
    .game-row > div:nth-child(1) {
        flex: 0 0 20%;
    }
    .game-row > div:nth-child(2) {
        flex: 0 0 50%;
    }
    .game-row > div:nth-child(3) {
        flex: 0 0 30%;
    }

    .date-circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: var(--secondary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        .game-date {
            color: #fff;
            font-size: 0.9rem;
            text-transform: uppercase;
            font-weight: bold;
            display: block;
        }
        .game-time {
            font-size: 0.7rem;
            color: var(--muted);
        }
    }

    .game-prefix {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        color: var(--secondary);
        font-weight: bold;
        text-transform: uppercase;
    }
    .game-opponent {
        font-family: var(--font-heading);
        font-size: 2.5rem;
        font-weight: bold;
    }
    .game-venue {
        font-style: italic;
    }

    @media (max-width: 640px) {
        .game-row {
            padding: 15px 0;
            height: auto;
        }
        .game-prefix {
            font-size: 1rem;
        }
        .game-opponent {
            font-size: 1.5rem;
        }
        .game-venue {
            font-size: 0.8rem;
        }
    }

    button {
        transition: box-shadow 0.2s ease;
        background-color: var(--primary);  
        color: #fff;
        font-weight: 600;
        text-decoration: none;

        &:hover {
            background-color: var(--primary);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
    }

</style>