<script lang="ts">
	import Icon from '@iconify/svelte';
import SectionTitle from './SectionTitle.svelte';
import {enhance} from "$app/forms"
</script>

<section
	class="mt-20 flex flex-col items-center justify-items-center gap-8 max-sm:mt-20 sm:grid sm:grid-cols-2 sm:content-center sm:items-start sm:gap-0 sm:gap-y-20"
>
	<SectionTitle from="from-orange-500" to="to-amber-500" font="font-sans" title="Contact Me" />
    
    <div class="toast toast-top toast-center">
      </div>

	<form action="/?/contact" method="POST" class="w-full flex flex-col gap-4 items-center max-w-sm" use:enhance>
		<label class="form-control w-full  ">
			<div class="label">
				<span class="label-text">Name</span>
			</div>
			<input
            name="name"
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full  "
				required
			/>
		</label>
		<label class="form-control w-full  ">
			<div class="label">
				<span class="label-text">Email</span>
			</div>
			<input
            name="email"
				type="email"
				placeholder="Type here"
				class="input input-bordered w-full  "
				required
			/>
		</label>

        <label class="form-control w-full  ">
            <div class="label">
              <span class="label-text">Message</span>
            </div>
            <textarea class="textarea textarea-bordered w-full  " placeholder="Lorem ipsum dolor..." rows=6 name="message"></textarea>
          </label>
          <button class="btn btn-success w-full sm:w-1/2 self-end " type="submit">
            <Icon icon="fa:send-o" class="text-xl"/>
            Send
        </button>
	</form>
</section>
