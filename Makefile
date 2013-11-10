JS_FILES      = $(shell find javascripts -type f -name '*.js')
CSS_FILES     = $(shell find stylesheets -type f -name '*.css')
STYL_FILES    = $(shell find stylesheets -type f -name '*.styl')
PARTIAL_FILES = $(shell find partials		 -type f -name '*.jade')

build: build/build.js build/build.css

build/build.css: $(STYL_FILES) $(CSS_FILES)
	@component build --copy

build/build.js: $(PARTIAL_FILES) $(JS_FILES)
	@component build --copy

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean build
