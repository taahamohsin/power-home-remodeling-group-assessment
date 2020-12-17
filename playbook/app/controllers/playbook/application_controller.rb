# frozen_string_literal: true

module Playbook
  class ApplicationController < ActionController::Base
    helper Webpacker::Helper
    helper Playbook::ApplicationHelper
    helper Playbook::PbDocHelper
    helper Playbook::PbSampleHelper
    append_view_path Playbook::Engine.root + "app/pb_kits"

    def delete_dark_mode_cookie
      cookies.delete :dark_mode
    end
  end
end