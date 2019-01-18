<template>
	<div class="full-width">
		<h2 class="d-block d-sm-none d-md-none d-lg-none sidebar-heading">Event Name</h2>
		<ul class="sidemenu">
            <li>
				<a href="">
					<img src="/static/img/b-logo.svg" alt="B Logo" title="B Logo" /> 
					<span><strong>Event home</strong></span>
				</a>
			</li>
			<li>
				<a href="">
					<img src="/static/img/agenda.svg" alt="Agenda" title="Agenda" /> 
					<span>Agenda</span>
				</a>
			</li>
			<li>
				<router-link :to='{ name: "Speakers"}'>
					<img src="/static/img/speaker.svg" alt="Speakers" title="Speakers" /> 
					<span>Speakers</span>
				</router-link>
			</li>
			<li>
				<router-link :to='{ name: "Sponsors"}'>
				<img src="/static/img/sponsors.svg" alt="Sponsors" title="Sponsors" /> 
					<span>Sponsors</span>
				</router-link>
			</li>
			<li>
				<a href="">
					<img src="/static/img/linkedin.svg" alt="Networking" title="Networking" /> 
					<span>Networking</span>
				</a>
			</li>
			<li>
				<a href="">
					<img src="/static/img/resources.svg" alt="Resources" title="Resources" /> 
					<span>Resources</span>
				</a>
			</li>
			<li>
				<a href="">
					<img src="/static/img/twitter.svg" alt="Twitter" title="Twitter" /> 
					<span>Twitter</span>
				</a>
			</li>
			<li>
				<a href="">
					<img src="/static/img/question.svg" alt="Feedback" title="Feedback" /> 
					<span>Feedback</span>
				</a>
			</li>
		</ul>
	</div>
	
</template>

<script>
export default {
  name: 'sidebar-menu'
}
</script>