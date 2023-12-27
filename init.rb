# Dynamically load all Hooks & Patches
ActiveSupport::Reloader.to_prepare do
  Dir::foreach(File.join(File.dirname(__FILE__), 'lib')) do |file|
    next unless /\.rb$/ =~ file
    require_dependency file
  end
end

Redmine::Plugin.register :bestest_sidebar_annihilator do
  name 'Bestest Side-Bar Annihilator for Redmine'
  author 'Martin Blom'
  description "This is an awesome plugin to hide/show the side-bar in Redmine. It's great. It's the bestest."
  version '1.0.1'
  url 'https://github.com/LeviticusMB/bestest_sidebar_annihilator'
  author_url 'https://github.com/LeviticusMB'
  requires_redmine version_or_higher: '5.1.0'
end
