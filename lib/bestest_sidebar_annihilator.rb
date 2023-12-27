class BestestSidebarAnnihilator < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "bestest_sidebar_annihilator/html_head_partial"
  render_on :view_layouts_base_content, :partial => "bestest_sidebar_annihilator/content_partial"
end
