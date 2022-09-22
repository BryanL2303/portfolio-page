class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :shortDescription, :longDescription, :image, :gitLink, :siteLink
end
