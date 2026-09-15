import { For, createMemo, createSignal } from "solid-js";

type Props = { activity: readonly string[] };

export default function StatusBoard(props: Props) {
  const [filter, setFilter] = createSignal<"all" | "attention">("all");
  const rows = createMemo(() =>
    filter() === "all" ? props.activity : props.activity.slice(-1),
  );
  return (
    <section class="activity" aria-labelledby="activity-title">
      <div class="section-heading">
        <div>
          <p class="kicker">Live workspace</p>
          <h2 id="activity-title">Recent activity</h2>
        </div>
        <div class="segmented" aria-label="Activity filter">
          <button
            classList={{ active: filter() === "all" }}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            classList={{ active: filter() === "attention" }}
            onClick={() => setFilter("attention")}
          >
            Needs attention
          </button>
        </div>
      </div>
      <div class="activity-list">
        <For each={rows()}>
          {(item, index) => (
            <article>
              <span class="pulse" aria-hidden="true"></span>
              <div>
                <strong>{item}</strong>
                <p>{index() + 2} minutes ago</p>
              </div>
              <span class="arrow" aria-hidden="true">
                →
              </span>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}
