import { For, Show, createResource, createSignal } from "solid-js";
import { categories } from "./constant";
import Loading from "~/components/Loading";
import Button from "~/components/Button";

type Joke = {
	categories: string[];
	icon_url: string;
	id: string;
	url: string;
	value: string;
	created_at: string;
	updated_at: string;
};

const fetchData = async (): Promise<Joke | undefined> => {
	try {
		const response = await fetch("https://api.chucknorris.io/jokes/random");
		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

const App = () => {
	const [category, setCategory] = createSignal<string>("");
	const [data, { refetch }] = createResource(fetchData);

	return (
		<div class="h-screen m-auto flex items-center max-w-lg">
			<Show when={!data.loading} fallback={<Loading />}>
				<div>
					<h2 class="text-5xl mb-4">
						Category:{" "}
						{category() !== "" ? (
							<span class="capitalize">{category()}</span>
						) : (
							"All"
						)}
					</h2>
					<blockquote
						cite={data()?.url}
						class="text-2xl p-4 rounded color-gray-400 bg-gray-100"
					>
						<p>{data()?.value}</p>
					</blockquote>

					<label
						for="hs-select-label"
						class="block text-sm font-medium mb-2 dark:text-white"
					>
						Label
					</label>
					<select
						name="category"
						onChange={(e) => setCategory(e.target.value)}
						value={category()}
						id="hs-select-label"
						class="py-3 px-4 pe-9 block w-full cursor-pointer border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:focus:ring-gray-600"
					>
						<option value="" disabled>Choose category</option>
						<For each={categories} fallback={<div>No items</div>}>
							{(cat) => <option class="cursor-pointer" value={cat}>{cat}</option>}
						</For>
					</select>

					<div class="flex justify-between my-4 items-baseline gap-4">
						<Button
							classList={
								"w-full focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-blue-500 text-white hover:bg-blue-600"
							}
							onClick={refetch}
							text={"Fetch next"}
						/>

						<Button
							classList={"w-full"}
							type="button"
							onClick={() => setCategory("")}
						>
							Clear filters
						</Button>
					</div>
				</div>
			</Show>
		</div>
	);
};

export default App;
