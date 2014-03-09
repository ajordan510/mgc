class WelcomeController < ApplicationController
	def index
		@title = 'Madison Gift Club'
		@js_file_to_include = ['navbar.js', 'fadeSlideShow.js']
	end

end
