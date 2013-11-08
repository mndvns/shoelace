JS_FILES      = $(shell find javascripts -type f -name '*.js')
STYL_FILES    = $(shell find stylesheets -type f -name '*.styl')
PARTIAL_FILES = $(shell find partials		 -type f -name '*.jade')

build: build/build.js

build/build.js: $(PARTIAL_FILES) $(JS_FILES) $(STYL_FILES)
	@component build --copy --use component-jade

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean build
