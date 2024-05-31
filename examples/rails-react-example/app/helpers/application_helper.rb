# frozen_string_literal: true

module ApplicationHelper
  def stage_color_class(color)
    case color
    when 'blue' then 'blue'
    when 'yellow' then 'yellow'
    when 'red' then 'red'
    when 'purple' then 'purple'
    when 'green' then 'green'
    else ''
    end
  end

  def ticket_highlight_color_class(category)
    case category
    when 'New' then 'category_2'
    when 'Manager Feedback' then 'category_1'
    when 'Processing' then 'category_3'
    when 'Awaiting Feedback' then 'category_11'
    when 'Approved' then 'category_12'
    else ''
    end
  end

  def ticket_category_badge_variant(category)
    case category
    when 'New' then 'info'
    when 'Manager Feedback' then 'primary'
    when 'Processing' then 'warning'
    when 'Awaiting Feedback' then 'error'
    when 'Approved' then 'success'
    else ''
    end
  end
end
